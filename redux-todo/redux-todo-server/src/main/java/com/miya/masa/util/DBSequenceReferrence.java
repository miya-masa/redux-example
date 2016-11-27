package com.miya.masa.util;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBSequenceReferrence extends SequenceReferrence, JpaRepository<Sequence, String> {

  @Override
  default Long current(String tableName) {
    Sequence probe = new Sequence();
    probe.setTableName(tableName);
    findAll().forEach(System.out::println);
    return findOne(Example.of(probe)).getSequenceNo();
  }
}
