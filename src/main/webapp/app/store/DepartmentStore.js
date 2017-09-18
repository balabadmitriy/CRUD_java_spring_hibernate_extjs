Ext.define('EmployeeList.store.DepartmentStore', {
    extend: 'Ext.data.Store',
    requires : [
        'EmployeeList.model.DepartmentModel'
    ],
    model: 'EmployeeList.model.DepartmentModel',
    autoLoad: false,
    autoSync: true,
});