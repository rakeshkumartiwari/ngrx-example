import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { from } from 'rxjs';
import { Product } from '../../product/product/product';
import { ProductService } from '../product.service';
import * as selectors from '../state/selectors/product.selector';
import { HttpClientModule } from '@angular/common/http';
import * as productActions from '../state/actions/product.actions';

fdescribe('ProductComponent', () => {
  let store = MockStore;
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
      providers: [ProductService,
        provideMockStore({
          selectors: [
            { selector: selectors.getProducts, value: [] },
            { selector: selectors.getShowProductCode, value: true },
            { selector: selectors.getError, value: '' }
          ]
        })
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    store = TestBed.get(MockStore);
  }));

  it('should create', () => {

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should displayCode true', () => {
    component.displayCode = true;
    expect(component.displayCode).toBeTruthy();
  });

  it('should displayCode false', () => {
    component.displayCode = false;
    expect(component.displayCode).toBeFalsy();
  });

  it('should displayCode true', () => {
    component.fruitList = [ {
      id: 1,
      fruitName: 'Mango',
      fruitCode: 12345
  }];
    expect(component.fruitList.length).toBe(1);
  });
});
