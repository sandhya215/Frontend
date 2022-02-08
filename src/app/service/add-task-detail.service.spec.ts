import { TestBed } from '@angular/core/testing';

import { AddTaskDetailService } from './add-task-detail.service';

describe('AddTaskDetailService', () => {
  let service: AddTaskDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTaskDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
