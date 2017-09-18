Ext.define('EmployeeList.view.SearchEmployeeView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchEmployeeView',
    id:'formSearchId',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            id: 'searchId',
            fieldLabel: 'Введите слово для поиска',
            maxLength: 200
        }],
});