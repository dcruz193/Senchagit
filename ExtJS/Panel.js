Ext.define('Daniel.grid.Panel', {
    extend: 'Ext.grid.Panel',

    
    title: 'Simpsons',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],
    height: 200,
    width: 400,
    renderTo: Ext.getBody()
});
