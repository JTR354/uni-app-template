import {globalComputed, globalMethods} from '@state/helpers'

export default {
  computed: {
    ...globalComputed
  },
  methods: {
    ...globalMethods
  }
}
