import React from 'react';

const CssExample = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, backgroundColor: 'red', height: '100px' }}></div>
        <div style={{ flex: 2, backgroundColor: 'blue', height: '100px' }}></div>
        <div style={{ flex: 1, backgroundColor: 'green', height: '100px' }}></div>
        <div style={{ flex: 1, backgroundColor: 'yellow', height: '100px' }}></div>
      </div>  
    );
}

export default CssExample;
