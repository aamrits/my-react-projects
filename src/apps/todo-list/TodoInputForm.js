import React from 'react';

const TodoInput = ({ input, onChangeHandler, onSubmit, editItem, disabled }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <div className="input-group mb-2">
                        <label className="input-group-text">Item</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Add a task"
                            name="title"
                            value={ input }
                            onChange= { onChangeHandler }
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className={ editItem ? "btn btn-success": "btn btn-primary" }  
                    disabled={ disabled }
                >
                    { editItem ? 'Edit Item': 'Add Item'}
                </button>
            </form>
        </>
    )
}

export default TodoInput;