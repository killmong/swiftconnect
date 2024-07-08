import { useController } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { MdCalendarMonth } from 'react-icons/md';
import 'react-datepicker/dist/react-datepicker.css';

interface IDatePickerFieldProps {
  name: string;
  control: any;
  trigger: any;
}

const DatePickerField: React.FC<IDatePickerFieldProps> = (props) => {
  const { name, control } = props;
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  return (
    <div className="flex  h-9 w-full flex-row items-center rounded border border-borderColor px-1 md:h-10">
      <MdCalendarMonth className="text-base text-black" />
      <DatePicker
        dateFormat="MM-dd-yyyy"
        selected={value}
        minDate={new Date()}
        onChange={async (newDate: Date) => {
          onChange(newDate);
        }}
        className="h-full w-full cursor-pointer border-none pl-1 text-xs font-bold  text-dark focus:border-none focus:outline-none xl:pl-2 xl:text-sm"
      />
    </div>
  );
};

export default DatePickerField;
