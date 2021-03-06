import joi from "@hapi/joi";
const schema = {
  /**
   * @description 내 정보 수정
   */
  userSchema: joi.object({
    name: joi.string().required(),
    role: joi.string().required(),
  }),
};

export default schema;
