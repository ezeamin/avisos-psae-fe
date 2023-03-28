import { useAppSelector } from "../../../app/hook";

const LazyLoadingSpinner = () => {
  const { theme } = useAppSelector((state) => state.globalData);

  const bgColor = theme === 'light' ? '#333' : '#c9c9c9';

  return (
    <div className='spinner-data'>
      <div className='spinner-content'>
        <h2 className='spinner-title'>PODER JUDICIAL DE TUCUMÁN</h2>
        <div className='spinner-page'>
          <div className='spinner'>
            <div
              className='rect1'
              style={{
                backgroundColor: bgColor,
              }}
            ></div>
            <div
              className='rect2'
              style={{
                backgroundColor: bgColor,
              }}
            ></div>
            <div
              className='rect3'
              style={{
                backgroundColor: bgColor,
              }}
            ></div>
            <div
              className='rect4'
              style={{
                backgroundColor: bgColor,
              }}
            ></div>
            <div
              className='rect5'
              style={{
                backgroundColor: bgColor,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyLoadingSpinner;
