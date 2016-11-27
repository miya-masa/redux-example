package com.miya.masa.domain.model.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "todos", collectionResourceRel = "todos")
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
