import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Item } from '../models/items';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  
  constructor(public afs: AngularFirestore) {
      //this.items = this.afs.collection('items').valueChanges();
      this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));
      
      this.items = this.itemsCollection.snapshotChanges().pipe(map(changes=>{
          return changes.map(a=>{
              const data = a.payload.doc.data() as Item; 
              data.id = a.payload.doc.id;
              return data;
          })
      }));
  }
  getItem(){
      return this.items;
  }
  addItem(item: Item){
      this.itemsCollection.add(item);
  }
}
