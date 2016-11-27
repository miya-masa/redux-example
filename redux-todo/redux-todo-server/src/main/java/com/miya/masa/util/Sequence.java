package com.miya.masa.util;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Sequence {

  @Id
  @Column(name = "TABLE_NAME")
  private String tableName;

  @Column(name = "SEQUENCE_NO", nullable = false)
  private Long sequenceNo;

}
