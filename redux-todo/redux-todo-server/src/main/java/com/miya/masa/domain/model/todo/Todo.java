package com.miya.masa.domain.model.todo;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.TableGenerator;
import javax.persistence.Version;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.TABLE, generator = "sequence")
  @TableGenerator(
      valueColumnName = "SEQUENCE_NO",
      pkColumnName = "TABLE_NAME",
      pkColumnValue = "TODO",
      table = "SEQUENCE",
      name = "sequence",
      allocationSize = 1)
  private Long id;

  @Column(name = "CODE", nullable = false, unique = true)
  private String code;

  @Column(name = "TODO", nullable = false)
  private String todo;

  @Column(name = "COMPLETE", nullable = false)
  private Boolean complete;

  @Column(name = "LIMIT_DATE")
  private LocalDateTime limitDate;

  @CreatedDate
  private LocalDateTime createDate;

  @LastModifiedDate
  private LocalDateTime updateTime;

  @Version
  @Column(name = "VERSION", nullable = false)
  private Long version;

}
