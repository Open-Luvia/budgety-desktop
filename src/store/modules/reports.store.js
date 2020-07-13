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
      },
      income_by_category: {
         last_week: [],
         last_month: [],
         last_year: []
      }
   },
   getters: {},
   mutations: {
      SET_INCOME_EXPENSE_BY_MONTH(state, report) {
         state.income_expense.by_month = report
      },
      SET_EXPENSE_BY_CATEGORY_LAST_YEAR(state, report) {
         state.expense_by_category.last_year = report
      },
      SET_INCOME_BY_CATEGORY_LAST_YEAR(state, report) {
         state.income_by_category.last_year = report
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
      },
      generateExpenseReportByCategory({ commit, rootGetters }) {
         const transactions_list = rootGetters['transactions/transactions_list']
         const category_name_by_id =
            rootGetters['categories/category_name_by_id']
         let expense_report = []
         transactions_list.forEach(transaction => {
            transaction.items.forEach(item => {
               if (item.amount <= 0) {
                  const category_name = category_name_by_id(item.category_id)
                  const category_is_in_report = expense_report.find(
                     report => report.name == category_name.name
                  )
                  if (category_is_in_report != undefined) {
                     category_is_in_report.value += Math.abs(item.amount)
                  } else {
                     const new_report = {
                        value: Math.abs(item.amount),
                        name: category_name.name
                     }
                     expense_report.push(new_report)
                  }
               }
            })
         })
         commit('SET_EXPENSE_BY_CATEGORY_LAST_YEAR', expense_report)
      },
      generateIncomeReportByCategory({ commit, rootGetters }) {
         const transactions_list = rootGetters['transactions/transactions_list']
         const category_name_by_id =
            rootGetters['categories/category_name_by_id']
         let income_report = []
         transactions_list.forEach(transaction => {
            transaction.items.forEach(item => {
               if (item.amount >= 0) {
                  const category_name = category_name_by_id(item.category_id)
                  const category_is_in_report = income_report.find(
                     report => report.name == category_name.name
                  )
                  if (category_is_in_report != undefined) {
                     category_is_in_report.value += Math.abs(item.amount)
                  } else {
                     const new_report = {
                        value: Math.abs(item.amount),
                        name: category_name.name
                     }
                     income_report.push(new_report)
                  }
               }
            })
         })
         commit('SET_INCOME_BY_CATEGORY_LAST_YEAR', income_report)
      }
   }
}
