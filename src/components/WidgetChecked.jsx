import iconCheck from '../assets/icon-check.svg';

const WidgetChecked = () => {
  return (
    <div className='todo-circle todo-circle-checked'>
        <img src={iconCheck} className='img-check' alt="icon-check" />
    </div>
  )
};

export default WidgetChecked;
