import { expect } from 'chai'

import board from '@/ai/board.js'
import Search from '@/ai/negamax.js'
import SCORE from '@/ai/score.js'

import math from '@/ai/math.js'

import config from '@/ai/config.js'

describe('测试 gen 函数', () => {
  it('应该能生成冲四防守点', () => {
    const b = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    board.init(b)
    board.put([5, 10], 1)
    board.put([4, 11], 2)
    board.put([6, 10], 1)
    const points = board.gen(2, true, true)
    expect(math.containPoint(points, [10, 6])).to.be.true
  })
  
})
