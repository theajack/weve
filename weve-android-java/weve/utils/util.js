import {Toast, Dialog} from 'vant';

export function alert (message) {
    Toast(message);
}

export function confirm (message, title = '提示框') {
    return Dialog.confirm({
        title,
        message,
    });
}