exports.maskEmail = function (email) {
  const [user, domain] = email.split("@");
  const visible = user.slice(0, 2);
  const masked = "*".repeat(Math.max(user.length - 2, 1));
  return `${visible}${masked}@${domain}`;
};
