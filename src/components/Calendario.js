import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';

import { ptBR } from 'date-fns/locale';

const minDate = new Date();
const maxDate = new Date('2022-12-31T00:00:00.000');

const Calendario = () => {

    const local = ptBR;
    const [date, setDate] = useState(new Date());

    return (
        <LocalizationProvider adapterLocale={local} dateAdapter={AdapterDateFns} style={{ maxHeidth: 300 }}>
            <CalendarPicker minDate={minDate} maxDate={maxDate} date={date} onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
    );
}

export default Calendario;