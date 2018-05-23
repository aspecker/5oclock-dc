export default {
  Query: {
    barSearch: async (root, args, { Bars }) => {
      const bars = await Bars.find(args);
      return bars.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    createBar: async (root, args, { Bars }) => {
      const bar = await new Bars(args).save();
      bar._id = bar._id.toString();
      return bar;
    },
  },
};
