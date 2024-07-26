import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { v4 as uuidv4 } from 'uuid';

interface Appointment {
  id: string;
  title: string;
  date: Date;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  appointmentForm: FormGroup;
  appointments: Appointment[] = [];
  calendarDays: Date[] = [];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.generateCalendarDays();
  }

  ngOnInit(): void {}

  addAppointment(): void {
    if (this.appointmentForm.valid) {
      const newAppointment: Appointment = {
        id: uuidv4(),
        title: this.appointmentForm.value.title,
        date: new Date(this.appointmentForm.value.date)
      };
      this.appointments.push(newAppointment);
      this.appointmentForm.reset();
    }
  }

  deleteAppointment(id: string): void {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);
  }

  drop(event: CdkDragDrop<Appointment[]>): void {
    console.log('Drag event:', event);
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }


  generateCalendarDays(): void {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    for (let date = startOfMonth; date <= endOfMonth; date.setDate(date.getDate() + 1)) {
      this.calendarDays.push(new Date(date));
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  getAppointmentsForDay(date: Date): Appointment[] {
    return this.appointments.filter(appointment => {
      return appointment.date.getDate() === date.getDate() &&
             appointment.date.getMonth() === date.getMonth() &&
             appointment.date.getFullYear() === date.getFullYear();
    });
  }
}
