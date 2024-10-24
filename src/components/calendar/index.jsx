import './index.scss';
import { useState } from "react";
import Calendar from "react-calendar/dist/cjs/Calendar.js";

const MyCalendar = () => {

const [date, setDate] = useState(new Date());

return (
    <div>
        <p>Selecione uma data:</p>
        <Calendar onChange={setDate} value={date} />
        <p>data selecionada: {date.toString()}</p>
    </div>

    );
}

export default MyCalendar;