function maxValue(report_data) {
   var max = -1
   report_data.forEach(data => {
      max = Math.max(max, ...data.data)
   })
   return max
}

export default {
   namespaced: true,
   state: {
      income_expense: {
         by_day: [],
         by_month: [],
         by_week: [],
         by_year: []
      },
      expense_by_category: {
         last_week: [],
         last_month: [],
         last_year: []
      }
   },
   getters: {},
   mutations: {
      SET_INCOME_EXPENSE_BY_MONTH(state, report) {
         state.income_expense.by_month = report
      }
   },
   actions: {
      generateReportByMonth({ commit, rootState, rootGetters }) {
         var data = []
         rootState.accounts.accounts.forEach(account => {
            var transactions_by_account =
               rootGetters['transactions/transactions_by_account']
            var transactions = transactions_by_account(account.id)

            transactions.forEach(transaction => {
               var month = transaction.date.locale('es').format('MMM')
               var month_data = data.find(
                  month_data => month_data.label === month
               )
               var found = true
               if (!month_data) {
                  month_data = {
                     label: month,
                     data: [0, 0]
                  }
                  found = false
               }
               if (transaction.amount < 0) {
                  month_data.data[1] += transaction.amount * -1
               } else {
                  month_data.data[0] += transaction.amount
               }
               if (!found) {
                  data.push(month_data)
               }
            })
         })
         const params = {
            report: data,
            max_value: maxValue(data)
         }
         commit('SET_INCOME_EXPENSE_BY_MONTH', params)
      }
   }
}
