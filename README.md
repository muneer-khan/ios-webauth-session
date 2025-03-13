# @palainteractive/ios-webauth-session

This capacitor plugin is to support Auth banking through our payment vendors. Paynearme and VIP Preffered payment vendors are currently requires Auth session component to launch their payment gateway in ios.

## Install

```bash
npm install @palainteractive/ios-webauth-session
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`startSession(...)`](#startsession)
* [`cancelSession()`](#cancelsession)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### startSession(...)

```typescript
startSession(options: { urlString: string; returnUrlScheme: string; }) => Promise<{ result: string; }>
```

| Param         | Type                                                         |
| ------------- | ------------------------------------------------------------ |
| **`options`** | <code>{ urlString: string; returnUrlScheme: string; }</code> |

**Returns:** <code>Promise&lt;{ result: string; }&gt;</code>

--------------------


### cancelSession()

```typescript
cancelSession() => Promise<{ message: string; }>
```

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------

</docgen-api>

