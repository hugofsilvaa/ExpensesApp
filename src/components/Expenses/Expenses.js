import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [newYear, setNewYear] = useState('2021')

    const filterHandler = (filterYear) => {
        setNewYear(filterYear)
    }

    const expenseFiltered = props.expenses.filter(expense => expense.date.getFullYear().toString() === newYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultYear={newYear} onFilterYear={filterHandler} />
                <ExpensesChart expenses={expenseFiltered} />
                <ExpenseList items={expenseFiltered} />
            </Card >
        </div>
    );
}

export default Expenses;