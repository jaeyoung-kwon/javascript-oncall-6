import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import { parseInputWithSeparator } from '../parser/parseInput.js';
import { INPUT_SEPARATOR } from '../constant/seperator.js';
import { throwWoowaError } from '../util/error.js';

class EmergencyDutyController {
  constructor() {}

  async init() {
    const startMonthAndDay = await Input.getStartMonthAndDay()((input) => {
      const parsedInput = parseInputWithSeparator(input, INPUT_SEPARATOR);
      if (parsedInput.length !== 2)
        throwWoowaError('유효하지 않은 입력 값입니다.');

      if (Number.isNaN(Number(parsedInput[0])))
        throwWoowaError('입력 받은 월 정보가 숫자가 아닙니다.');
      return parsedInput;
    });

    Console.print(startMonthAndDay);
  }
}

export default EmergencyDutyController;
