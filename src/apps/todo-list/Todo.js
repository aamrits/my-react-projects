import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../../components/Container/Container';
import TodoInputForm from './TodoInputForm';
import TodoList from './TodoList';

const Todo = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    
    const onChangeHandler = (e) => {
        setInput(e.target.value);

        if(input !== null) {
            setIsDisabled(false);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setItems([...items, {id: uuidv4(), input: input}]);
        setInput('');
        setIsDisabled(true);
    }

    const handleDelete = (id) => { 
        // filter items whose id doesn't match with item id       
        const filteredItems = items.filter(item => item.id !== id);

        setItems(filteredItems);
        setIsDelete(true);
    }

    const handleEdit = (id) => {
        const filteredItems = items.filter(item => item.id !== id);

        // find the item whose id matches with item id
        const selectedItem = items.find(item => item.id === id);

        setItems(filteredItems);
        setInput(selectedItem.input)
        setIsEdit(true);
    }

    const clearList = () => {
        setItems([]);
    }

    return (
        <>
            <Container>
                <TodoInputForm 
                    input={input}
                    onChangeHandler={onChangeHandler}
                    onSubmit={onSubmit}
                    editItem={ isEdit }
                    disabled={ isDisabled }
                />

                <TodoList 
                    items={items}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    clearList={clearList}
                />
            </Container>
        </>
    )
}

export default Todo;