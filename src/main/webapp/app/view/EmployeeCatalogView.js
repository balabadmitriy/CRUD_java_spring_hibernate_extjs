Ext.define('EmployeeList.view.EmployeeCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.employeeCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'employeeGridView',
            region: 'center'
        },
        {
            xtype: 'searchEmployeeView',
            title: 'Поиск',
            region: 'west',
            width: 300
        }
    ],

    renderTo: Ext.getBody()
});