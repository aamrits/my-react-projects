import React from 'react'
import Container from '../../components/Container/Container'

const ToDoList = ({ items,handleEdit, handleDelete, clearList }) => {
    let itemsList;

    if(items) {
        itemsList = (
            items.map(item => (
              <li key={ item.id } className="list-group-item d-flex justify-content-between align-items-center rounded mb-3">
                <div style={{flexBasis: '80%'}}>
                    { item.input }
                </div>
                <div>
                    <span className="btn btn-primary me-3" onClick={ () => handleEdit(item.id) }>
                        Edit
                    </span>
                    <span className="btn btn-danger"  onClick={ () => handleDelete(item.id) }>
                        Delete
                    </span>
                </div>
              </li>
            ))
        )
    }
  return (
    <Container>
      <ul className="list-group my-3">
          { itemsList }
      </ul>
      <button 
        type="submit" 
        className="btn btn-danger btn-block" 
        onClick={clearList}
        > Clear list
      </button>
    </Container>
  )
}

export default ToDoList;