import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'tablekeyvalue'
})
export class TableKeyValuePipe implements PipeTransform {
  transform(data: any, key: string, type?: string) {
    let keyFiltered = data[key];

    if (key.includes('.')) {
      keyFiltered = data;

      key.split('.').forEach((element) => {
        keyFiltered = keyFiltered[element];
      });
    }

    switch (type) {
      case 'timestamp':
        return new Date(keyFiltered);
      case 'length':
        return keyFiltered.length;
      default:
        return keyFiltered as string;
    }
  }
}