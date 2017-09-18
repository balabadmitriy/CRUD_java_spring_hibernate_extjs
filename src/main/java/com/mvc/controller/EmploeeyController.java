package com.mvc.controller;

import com.mvc.domain.Employee;
import com.mvc.service.CRUDEntities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/employee")
public class EmploeeyController {

    @Autowired
    private CRUDEntities<Employee> employeeService;

    @RequestMapping(value = "/get",method = RequestMethod.GET)
    @ResponseBody
    public Map<String, ? extends Object> getEmployees(String search, String limit, String page) {

        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("data", employeeService.getEntities(search, limit, page));
        modelMap.put("total", employeeService.getTotal());
        modelMap.put("sccess", true);

        return modelMap;
    }

    @RequestMapping(value = "/post",method = RequestMethod.POST)
    @ResponseBody
    public Map<String, ? extends Object> setEmployee(@RequestBody Employee employee) {

        CheckEmployee flag = new CheckEmployee(employeeService.add(employee), employee);

        Map<String, Object> modelMap = new HashMap<>();
        if (flag.isSuccess()) {
            modelMap.put("data", employeeService.getEntities("", "1", String.valueOf(employeeService.getTotal())));
            modelMap.put("total", employeeService.getTotal());
            modelMap.put("sccess", flag.isSuccess());
        }
        return modelMap;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, ? extends Object>  deleteEmployee(@RequestBody Employee employee) {
        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("data",employeeService.delete(employee));
        modelMap.put("total",employeeService.getTotal());
        modelMap.put("sccess", true);
        return modelMap;
    }

    @RequestMapping(value = "/put",method = RequestMethod.POST)
    @ResponseBody
    public String updateEmployee(@RequestBody Employee employee) {

        employeeService.update(employee);
        return "update";
    }
}