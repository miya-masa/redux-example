package com.miya.masa.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.miya.masa.domain.model.todo.Todo;
import com.miya.masa.domain.model.todo.TodoCodeGenerator;

@Component
@RepositoryEventHandler
public class TodoEventHandler {

    @Autowired
    private TodoCodeGenerator generator;

    @HandleBeforeCreate
    public void handleBeforeTodoSave(Todo todo) {
        String code = generator.generate();
        todo.setCode(code);
    }

}
