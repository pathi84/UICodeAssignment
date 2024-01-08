import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoriesComponent } from './stories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoriesService } from '../services/stories.service';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesComponent ],
      imports: [HttpClientTestingModule,NoopAnimationsModule,MatFormFieldModule,MatInputModule,MatPaginatorModule,MatTableModule],
      providers: [StoriesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call hacker news stories get function', () => {
    const fakeData: any[] = [{ by:"angaloman",title:"Angaloman test found on clay",url:"https://testsite.com" } ]
    const fixture = TestBed.createComponent(StoriesComponent);
    const app = fixture.componentInstance;
    const service = TestBed.inject(StoriesService);
    const mySpy = spyOn(service , 'getStoriesList').and.returnValue(of(fakeData));
    app.getSaleList();
    expect(mySpy).toHaveBeenCalledTimes(1);

  });
});
