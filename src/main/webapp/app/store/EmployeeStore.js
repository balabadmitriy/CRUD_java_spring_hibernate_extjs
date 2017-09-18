Ext.define('EmployeeList.store.EmployeeStore', {
    extend: 'Ext.data.Store',
    id:'employeeStoreId',
    requires : [
        'EmployeeList.model.EmployeeModel'
    ],
    model: 'EmployeeList.model.EmployeeModel',
    /*autoLoad: {
     start:0,
     limit:1
     },*/

    autoLoad: true,
    autoSync: true,
    pageSize: 5,
    /*proxy: {
        type: 'ajax',
        api: {
            create: 'employee/post',
            read: 'employee/get',
            destroy: 'employee/delete',
            update: 'employee/put'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty:'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }*/
});