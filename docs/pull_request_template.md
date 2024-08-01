Before anything, let's have [some music](https://www.youtube.com/watch?v=3GwjfUFyY6M)

# Before opening a PR, be assure that you:

- [ ] Use formatPrice/formatValue to consider the currency of the user preference to format any values.
- [ ] Created any i18n strings necessary, both in english and portuguese (translation to portuguese is not required.
- [ ] Made sure that we are not having any errors/warnings in the build process.
- [ ] Did not use any arbitrary values with Tailwind (ex: w-[300px]), unless extremely necessary.
- [ ] Made sure that your code is well written.
- [ ] Have drinked some water and stretched yourself at least one time in the last hour.
- [ ] Merged the dev branch into your current branch and resolved any conflicts.

---

## Merging dev and Resolving Conflicts

Before opening a pull request, you **MUST** merge the dev branch into your current branch. If there are conflicts, you need to understand and resolve them. Here's the process:

1. Merge the dev branch into your current branch (fast-forward merge).
2. If there are conflicts, it means that a file you modified has already been changed in the dev branch.
3. To resolve conflicts, you need to carefully review the conflicting parts of the code and decide which changes to keep (ask for help if you're not sure).
4. Understand the purpose of both your changes and the changes in the dev branch.
5. Manually edit the conflicting files to incorporate both sets of changes appropriately.
6. After resolving all conflicts, commit the changes.

**IMPORTANT: Only PRs that have completed the Branch Management and Conflict Resolution process and have an error-free `npm run build` will be approved.**

### [Required] Were there any conflicts when merging dev?

- [ ] Yes
- [ ] No

If yes, please explain what kind of conflicts you encountered and how you resolved them:

```
[Your explanation here]
```

---

# If all is done, let's open this PR and move on.

### [Required] What have you done in this PR?

Please, inform the details here.

### [Required] Which tests we should do before approving this PR?

Please, inform the details here.

### Do you have any additional information for us?

If you feel the need to tell anything more or send screenshots, please, do it here.

_That's it! Don't forget to assign yourself in this PR and set some tags accordingly._