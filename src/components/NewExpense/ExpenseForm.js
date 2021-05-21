import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [newExpense, setNewExpense] = useState(true);

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })
        //     setUserInput((previous) => {
        //         return { ...previous, enteredAmount: e.target.value }
        //     })
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
    }

    const sumbitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const addNewExpenseHandler = () => setNewExpense(!newExpense)

    if (newExpense) {
        return <button onClick={addNewExpenseHandler}>Add New Expense</button>
    }

    return (
        <form onSubmit={sumbitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={addNewExpenseHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
