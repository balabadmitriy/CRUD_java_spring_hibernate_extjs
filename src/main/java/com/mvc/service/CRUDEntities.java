package com.mvc.service;

import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Transactional
public interface CRUDEntities<T> {
    Boolean add(T entity);

    void update(T entity);

    Collection<T> getEntities(String search, String limit, String start);

    String delete(T entity);

    Long getTotal();
}
