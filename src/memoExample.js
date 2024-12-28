import React, { useState, useMemo } from 'react';

function MemoExample() {
    const [filter, setFilter] = useState('');
    const items = ['apple', 'banana', 'cherry', 'date'];

    const filteredItems = useMemo(() => {
        return items.filter(item => item.includes(filter));
    }, [filter, items]);

    return (
        <div>
            <input 
                type="text" 
                value={filter} 
                onChange={e => setFilter(e.target.value)} 
                placeholder="Search items" 
            />
            <ul>
                {filteredItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}

export default MemoExample;
