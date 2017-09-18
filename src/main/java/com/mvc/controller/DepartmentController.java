package com.mvc.controller;

//import com.mvc.service.DepartmentService;
import com.mvc.domain.Department;
import com.mvc.service.CRUDEntities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/department")
public class DepartmentController {

    @Autowired
    private CRUDEntities<Department> departmentService;

    @RequestMapping(value = "/get",method = RequestMethod.GET)
    @ResponseBody
    public Map<String, ? extends Object> getDepartments(String search, String limit, String start) {

        Map<String, Object> modelMap = new HashMap<>();
        modelMap.put("data", departmentService.getEntities(search, limit, start));
        /*modelMap.put("total", departmentService.getTotal());
        modelMap.put("sccess", true);*/
        return modelMap;
    }
}
