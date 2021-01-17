import { queryCep } from './dml';

export const printAll = () => {
    var index = 0;
    var call = 'true';

    while (call !== 'false') {

        var call = queryCep(index);
        index++;
    }
};