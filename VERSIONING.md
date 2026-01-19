# Versioning Guide for Day by Day

This document explains how to manage versions and the changelog for Day by Day.

## Version Numbering

Day by Day uses [Semantic Versioning](https://semver.org/) (SemVer): `MAJOR.MINOR.PATCH`

### When to Increment Each Number

**MAJOR (x.0.0)** - Breaking changes
- Changes that require data migration
- Removal of core features
- Changes that break existing backups
- Major architectural changes

Examples:
- Changing the localStorage data structure incompatibly
- Removing the ability to import old backup files
- Switching from local-only to requiring a server

**MINOR (1.x.0)** - New features
- Adding new functionality
- New tracking capabilities
- New settings or configuration options
- Significant UI improvements

Examples:
- Adding a new symptom to track
- Adding medication reminders
- Adding a new export format
- Adding customisable cycle lengths ✓ (v1.3.0)
- Adding patient detail fields ✓ (v1.2.0)

**PATCH (1.4.x)** - Bug fixes and minor improvements
- Bug fixes
- UI tweaks
- Performance improvements
- Documentation updates
- Spelling corrections

Examples:
- Fixing a calculation error
- Fixing layout issues on specific devices
- Improving button contrast
- British English spelling fixes ✓ (could be v1.4.1 or bundled in minor)

## How to Release a New Version

### 1. Update CHANGELOG.md

Add a new section at the top following this format:

```markdown
## [1.5.0] - 2026-02-15

### Added
- New feature description

### Changed
- Changes to existing features

### Fixed
- Bug fixes

### Removed
- Removed features (rare)
```

### 2. Update Version Numbers

Update the version in these files:

1. **manifest.json** - Line 4: `"version": "1.5.0"`
2. **app.js** - Line 2: `const APP_VERSION = '1.5.0';`
3. **about.html** - Line 186: `<li><strong>Version:</strong> 1.5.0 (15 February 2026)</li>`
4. **README.md** - Line 5: `[![Version](https://img.shields.io/badge/version-1.5.0-blue.svg)]`
5. **README.md** - Line 76: `**Current version:** 1.5.0`

### 3. Commit and Tag

```bash
# Commit the version changes
git add CHANGELOG.md manifest.json app.js about.html README.md
git commit -m "Bump version to 1.5.0"

# Create a git tag
git tag -a v1.5.0 -m "Release version 1.5.0"

# Push commits and tags
git push origin main
git push origin v1.5.0
```

### 4. Create GitHub Release (Optional)

1. Go to GitHub repository → Releases → "Draft a new release"
2. Choose the tag `v1.5.0`
3. Release title: `Day by Day v1.5.0`
4. Description: Copy the changelog section for this version
5. Publish release

## Version History Reference

| Version | Date | Key Changes |
|---------|------|-------------|
| 1.4.0 | 2026-01-19 | Enhanced backup/restore, split data clearing options |
| 1.3.0 | 2026-01-18 | Customisable cycle length and number of cycles |
| 1.2.0 | 2026-01-13 | Patient details fields, auto-update detection |
| 1.1.0 | 2026-01-07 | Offline support (PWA), swipe navigation |
| 1.0.0 | 2026-01-06 | Initial release |

## Examples of Future Versions

**Patch release (1.4.1):**
- Fix: Calendar date alignment issue on iOS
- Fix: Symptom chart tooltip positioning
- Changed: Improved button contrast in light mode

**Minor release (1.5.0):**
- Added: Medication reminder notifications
- Added: Export to PDF functionality
- Changed: Redesigned settings layout

**Major release (2.0.0):**
- Changed: Complete rewrite with improved data structure
- Added: Optional cloud backup (breaking change - new feature paradigm)
- Removed: Support for v1.x backup files (migration tool provided)

## Best Practices

1. **Update CHANGELOG.md with every commit** that affects users
2. **Bundle related changes** into a single version release
3. **Don't skip versions** - if you're at 1.4.0, next is either 1.4.1, 1.5.0, or 2.0.0
4. **Use git tags** for all releases to enable easy rollback
5. **Keep backwards compatibility** when possible (prefer MINOR over MAJOR)
6. **Document breaking changes** prominently in CHANGELOG
7. **Test backup/restore** thoroughly before MINOR/MAJOR releases
8. **Update service worker** cache version when releasing (sw.js)

## Notes

- The service worker in `sw.js` has its own cache version (`const CACHE_VERSION = 'v1'`) - increment this when releasing to force updates
- Users will be notified of updates via the auto-update detection system (added in v1.2.0)
- Demo backup file should be updated for MINOR releases to showcase new features
