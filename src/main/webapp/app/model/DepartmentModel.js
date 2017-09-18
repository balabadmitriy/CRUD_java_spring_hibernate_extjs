Ext.define('EmployeeList.model.DepartmentModel', {
    extend: 'Ext.data.Model',
    fields: ['id','departmentName'],
    pageSize:1,
    associations: [{
        type: 'hasMany',
        model: 'HierarchyOfDep',
        name: 'founders'
    }],
    proxy: {
        type: 'ajax',
         api: {
         create: 'department/post',
         read: 'department/get',
         destroy: 'department/delete',
         update: 'department/put'

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
    }
});