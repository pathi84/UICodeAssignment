import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { StoriesService } from './stories.service';

describe('SaleService', () => {
  let service: StoriesService;

  let _hackerNewsServiceSpy: jasmine.SpyObj<StoriesService>;
    beforeEach(() => {
        const spy = jasmine.createSpyObj('StoriesService', ['getStoriesList']);
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ { provide: StoriesService, useValue: spy }]
      });
      _hackerNewsServiceSpy = TestBed.inject(StoriesService) as jasmine.SpyObj<StoriesService>; 
    });

  it('getAllStories should return data', (done) => {
    const expectedData: any[] = [
          {   by:"samaysharma",
              title:"Pythagorean Theorem found on clay",
              url:"https://test.com" 
          },
          {   by:"ashish",
              title:"build demo",
              url:"https://test.com" 
          }
      ];

      _hackerNewsServiceSpy.getStoriesList.and.returnValue(of(expectedData));
      _hackerNewsServiceSpy.getStoriesList().subscribe(data => {
          expect(data).toEqual(expectedData);
          done();
        });
    });

});
