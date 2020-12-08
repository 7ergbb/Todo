import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/action'
import { ALL, COMPLETED, INCOMPLETE } from '../actions/action'

const Filters = [ALL, COMPLETED, INCOMPLETE]

function Filter({ todoFilter, setFilter }) {
    return (
        <div className="todo-filter">
            {
                Filters.map((filter, i) => (
                    <span
                        className={filter === todoFilter ? 'todo-filter-active' : ''}
                        onClick={() => setFilter(filter)}
                        key={i}>
                        {filter}
                    </span>
                ))
            }
        </div>
    )
}

const mapState = (state) => ({ todoFilter: state.todoFilter.activeFilter })
export default connect(mapState, { setFilter })(Filter)
