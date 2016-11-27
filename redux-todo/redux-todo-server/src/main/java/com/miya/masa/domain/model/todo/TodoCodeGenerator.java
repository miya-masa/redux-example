package com.miya.masa.domain.model.todo;

import javax.transaction.Transactional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miya.masa.util.CodeGenerator;
import com.miya.masa.util.SequenceReferrence;

@Service
@Transactional
public class TodoCodeGenerator implements CodeGenerator {

  @Autowired
  private SequenceReferrence ref;

  @Override
  public String generate() {
    Long currentSequence = ref.current(Todo.class.getSimpleName().toUpperCase());
    return "TODO_" + StringUtils.leftPad(currentSequence.toString(), 4, '0');
  }

}
