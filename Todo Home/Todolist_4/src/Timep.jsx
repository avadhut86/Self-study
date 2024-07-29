import React, { useState } from 'react';

const Timep = () => {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);

    function addTodo() {
        setListData([...listData, activity]);
        setActivity('');
    }

    function removeList(index) {
        const updateList = listData.filter((elem, id) => index !== id);
        setListData(updateList);
    }

    function allList() {
        setListData([]);
    }

    return (
        <>
            <h1>TODO LIST</h1>
            <input
                type="text"
                placeholder="Enter here the task"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>

            <h1>HERE IS YOUR LIST: {")"}</h1>

            {/* To show the list below TODO yaa Task */}
            {listData.length > 0 && listData.map((data, index) => {
                return (
                    <div key={data} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <p style={{ margin: 0 }}>{data}</p>
                        <button onClick={() => removeList(index)}>Remove</button>
                    </div>
                );
            })}

            {listData.length >= 1 && <button onClick={allList}>Remove all</button>}
        </>
    );
};

export default Todo4;
