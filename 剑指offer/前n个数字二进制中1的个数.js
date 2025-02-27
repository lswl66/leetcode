// 题目描述
// 给定一个非负整数 n ，请计算 0 到 n 之间的每个数字的二进制表示中 1 的个数，并输出一个数组。

// 示例 1:
// 输入: n = 2  输出: [0,1,1]
// 解释: 
// 0 --> 0  1 --> 1  2 --> 10
// 示例 2:
// 输入: n = 5  输出: [0,1,1,2,1,2]
// 解释:
// 0 --> 0  1 --> 1  2 --> 10
// 3 --> 11  4 --> 100  5 --> 101

function countBits(n) {
    const f = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        f[i] = f[i & (i - 1)] + 1
    }
    return f
}
console.log(countBits(2));
console.log(countBits(5));

// & 按位与运算 得到的结果二进制比之前的二进制里 1 少一个
// 例： (5)101 & (4)100 = (4)100 100 比 101 少一个 1
// 例： (6)110 & (5)101 = (4)100 100 比 110 少一个 1
// 例： (7)111 & (6)110 = (6)110 110 比 111 少一个 1
// 因为 i&(i-1) 比 i 小，此时 f[i&(i-1)] 必定有值 又知道对应数二进制的 1 只少1个 因此+1即可得到当前的二进制数
// 这种知道基础状态 f[0] = 0, 并且最终的答案由中间的答案推算出来的解法 叫做 动态规划 


// 动态规划是一种通过将复杂问题分解为重叠子问题，并利用存储机制避免重复计算的高效算法设计方法。在解决算法题时，创建动态规划方案可遵循以下步骤：
// 1.分析问题结构 确认问题是否具备动态规划的两个核心特性：
//      最优子结构：问题的最优解包含子问题的最优解，例如最短路径的子路径仍为最短。
//      重叠子问题：子问题在求解过程中会被多次重复计算。
// 2.定义状态表示
//      明确状态变量（通常用数组 dp[] 或矩阵 dp[][] 表示），使其能够描述问题的阶段性特征。例如，在背包问题中，dp[i][j] 可定义为前 i 个物品在容量 j 下的最大价值。
// 3.推导状态转移方程
//      建立子问题间的递推关系，这是动态规划的核心。通过观察子问题间的逻辑关系，用数学表达式描述状态变化。例如，斐波那契数列的转移方程为 dp[i] = dp[i-1] + dp[i-2]。
// 4.初始化边界条件
//      确定初始状态的取值，避免递推过程中的逻辑错误。例如，在计算路径问题时，dp[0][0] 通常初始化为起点状态的值，而第一行和第一列可能根据问题约束初始化为特定值。
// 5.确定计算顺序
//      采用自底向上（迭代）或自顶向下（记忆化搜索）的方式填充状态表。例如，计算最长递增子序列时，通常从左到右遍历数组并更新 dp[i] 的值。
// 6.构造最终解
//      根据填充完成的状态表提取结果。若需输出具体方案（如具体路径），可通过反向追踪状态转移过程重构解。
// 7.实践要点
//      验证状态转移的正确性：通过手动模拟小规模测试案例，检查递推逻辑是否覆盖所有可能情况。
//      优化空间复杂度：若状态仅依赖前几个子问题，可压缩存储维度（如将二维数组优化为一维数组）。
//      处理边界异常：例如输入为 0 或负数时需单独处理，避免数组越界。

// 以计算二进制中 1 的个数为例（问题中的 countBits 函数），其动态规划过程如下：
// 状态定义：f[i] 表示数字 i 的二进制中 1 的个数。
// 转移方程：利用 i & (i-1) 移除最低位的 1，得到 f[i] = f[i & (i-1)] + 1。
// 初始化：f[0] = 0 作为基准条件。
// 此例通过位运算直接关联子问题，体现了动态规划对重叠子问题的高效复用。
