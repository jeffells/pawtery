# Pawtery Website — Setup Guide
## Complete step-by-step instructions for going live

---

## WHAT YOU NEED BEFORE STARTING
- Kathie's email: feebiejean@gmail.com
- About 60–90 minutes total (can be done in separate sessions)
- A computer (not a phone for this part)

---

## STEP 1 — Create a GitHub Account (10 min)

1. Go to **github.com**
2. Click "Sign up"
3. Enter email: feebiejean@gmail.com
4. Create a password — write it down somewhere safe
5. Choose username: **pawtery** (or kathiepawtery if taken)
6. Select the **Free** plan
7. Verify your email when GitHub sends a confirmation

---

## STEP 2 — Upload the Website Files to GitHub (10 min)

1. Once logged in to GitHub, click the **+** button (top right) → "New repository"
2. Repository name: **pawtery**
3. Set to **Public**
4. Check "Add a README file"
5. Click "Create repository"
6. Click "uploading an existing file" (link in the middle of the page)
7. Drag the entire **pawtery-deploy** folder contents into the upload area:
   - index.html
   - admin/ (folder)
   - products/ (folder)
   - uploads/ (folder — even if empty)
8. Scroll down, click **"Commit changes"**
9. All files are now saved in GitHub ✓

---

## STEP 3 — Create a Netlify Account & Connect to GitHub (10 min)

1. Go to **netlify.com**
2. Click "Sign up" → choose "Sign up with GitHub"
3. Authorize Netlify to access your GitHub
4. Click **"Add new site"** → "Import an existing project"
5. Choose **GitHub**
6. Select the **pawtery** repository
7. Leave all settings as default
8. Click **"Deploy site"**
9. Wait about 60 seconds — Netlify gives you a random URL like `sunny-cupcake-123.netlify.app`
10. Click that URL — your site should be live! ✓

---

## STEP 4 — Turn On the Admin Panel (10 min)

1. In Netlify dashboard, click your site
2. Go to **"Identity"** tab → click **"Enable Identity"**
3. Scroll down to **"Registration"** → set to **"Invite only"**
4. Scroll to **"Services"** → click **"Enable Git Gateway"**
5. Go back to **"Identity"** tab → click **"Invite users"**
6. Enter: feebiejean@gmail.com
7. Click "Send"
8. Kathie gets an email — she clicks the link and sets a password
9. Admin panel is now live at: `your-netlify-url.netlify.app/admin` ✓

---

## STEP 5 — Buy the Domain (10 min)

1. Go to **namecheap.com**
2. Search: **pawtery.shop**
3. Add to cart — should be $1–5 for year 1
4. Create a Namecheap account (use feebiejean@gmail.com)
5. Check out — turn on **Auto Renew** so it never expires accidentally
6. Done ✓

---

## STEP 6 — Connect the Domain to Netlify (10 min)

1. In Netlify: go to your site → **"Domain settings"**
2. Click **"Add custom domain"**
3. Type: **pawtery.shop** → click Verify
4. Netlify shows you two DNS values (they look like: `dns1.p01.nsone.net`)
5. Go to **namecheap.com** → log in → "Domain List" → click "Manage" next to pawtery.shop
6. Click **"Advanced DNS"**
7. Delete any existing records
8. Add the two values Netlify gave you
9. Back in Netlify, click **"Verify DNS configuration"**
10. Wait up to 1 hour — the site will be live at **pawtery.shop** ✓
11. Netlify automatically sets up HTTPS/SSL (the padlock) — free ✓

---

## STEP 7 — Test Everything

- [ ] Visit pawtery.shop — site loads correctly
- [ ] Visit pawtery.shop/admin — login screen appears
- [ ] Log in with feebiejean@gmail.com and Kathie's password
- [ ] Click on a product — can you see and edit it?
- [ ] Add a test product — does it appear on the site within 60 seconds?
- [ ] Submit the contact form — does Kathie receive the email?
- [ ] Check on phone — does the site look good on mobile?

---

## ONGOING COSTS

| Item | Cost |
|---|---|
| GitHub | Free forever |
| Netlify hosting | Free forever |
| Netlify CMS (admin panel) | Free forever |
| Domain renewal (yearly) | ~$18–22/year |
| **Total monthly** | **~$1.50/month average** |

---

## IF YOU GET STUCK

Netlify has excellent free support chat at netlify.com/support
GitHub has guides at docs.github.com
Or come back and ask — happy to help troubleshoot any step.

