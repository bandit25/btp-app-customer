/*
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
/*
 * This code was generated by https://code.google.com/p/google-apis-client-generator/
 * (build: 2015-03-26 20:30:19 UTC)
 * on 2015-04-07 at 09:12:24 UTC 
 * Modify at your own risk.
 */

package com.appspot.btp_app.customerapi;

/**
 * Service definition for Customerapi (v1).
 *
 * <p>
 * testapi
 * </p>
 *
 * <p>
 * For more information about this service, see the
 * <a href="" target="_blank">API Documentation</a>
 * </p>
 *
 * <p>
 * This service uses {@link CustomerapiRequestInitializer} to initialize global parameters via its
 * {@link Builder}.
 * </p>
 *
 * @since 1.3
 * @author Google, Inc.
 */
@SuppressWarnings("javadoc")
public class Customerapi extends com.google.api.client.googleapis.services.json.AbstractGoogleJsonClient {

  // Note: Leave this static initializer at the top of the file.
  static {
    com.google.api.client.util.Preconditions.checkState(
        com.google.api.client.googleapis.GoogleUtils.MAJOR_VERSION == 1 &&
        com.google.api.client.googleapis.GoogleUtils.MINOR_VERSION >= 15,
        "You are currently running with version %s of google-api-client. " +
        "You need at least version 1.15 of google-api-client to run version " +
        "1.18.0-rc of the customerapi library.", com.google.api.client.googleapis.GoogleUtils.VERSION);
  }

  /**
   * The default encoded root URL of the service. This is determined when the library is generated
   * and normally should not be changed.
   *
   * @since 1.7
   */
  public static final String DEFAULT_ROOT_URL = "https://btp-app.appspot.com/_ah/api/";

  /**
   * The default encoded service path of the service. This is determined when the library is
   * generated and normally should not be changed.
   *
   * @since 1.7
   */
  public static final String DEFAULT_SERVICE_PATH = "customerapi/v1/";

  /**
   * The default encoded base URL of the service. This is determined when the library is generated
   * and normally should not be changed.
   */
  public static final String DEFAULT_BASE_URL = DEFAULT_ROOT_URL + DEFAULT_SERVICE_PATH;

  /**
   * Constructor.
   *
   * <p>
   * Use {@link Builder} if you need to specify any of the optional parameters.
   * </p>
   *
   * @param transport HTTP transport, which should normally be:
   *        <ul>
   *        <li>Google App Engine:
   *        {@code com.google.api.client.extensions.appengine.http.UrlFetchTransport}</li>
   *        <li>Android: {@code newCompatibleTransport} from
   *        {@code com.google.api.client.extensions.android.http.AndroidHttp}</li>
   *        <li>Java: {@link com.google.api.client.googleapis.javanet.GoogleNetHttpTransport#newTrustedTransport()}
   *        </li>
   *        </ul>
   * @param jsonFactory JSON factory, which may be:
   *        <ul>
   *        <li>Jackson: {@code com.google.api.client.json.jackson2.JacksonFactory}</li>
   *        <li>Google GSON: {@code com.google.api.client.json.gson.GsonFactory}</li>
   *        <li>Android Honeycomb or higher:
   *        {@code com.google.api.client.extensions.android.json.AndroidJsonFactory}</li>
   *        </ul>
   * @param httpRequestInitializer HTTP request initializer or {@code null} for none
   * @since 1.7
   */
  public Customerapi(com.google.api.client.http.HttpTransport transport, com.google.api.client.json.JsonFactory jsonFactory,
      com.google.api.client.http.HttpRequestInitializer httpRequestInitializer) {
    this(new Builder(transport, jsonFactory, httpRequestInitializer));
  }

  /**
   * @param builder builder
   */
  Customerapi(Builder builder) {
    super(builder);
  }

  @Override
  protected void initialize(com.google.api.client.googleapis.services.AbstractGoogleClientRequest<?> httpClientRequest) throws java.io.IOException {
    super.initialize(httpClientRequest);
  }

  /**
   * Create a request for the method "deleteCustomer".
   *
   * This request holds the parameters needed by the customerapi server.  After setting any optional
   * parameters, call the {@link DeleteCustomer#execute()} method to invoke the remote operation.
   *
   * @param no
   * @return the request
   */
  public DeleteCustomer deleteCustomer(java.lang.String no) throws java.io.IOException {
    DeleteCustomer result = new DeleteCustomer(no);
    initialize(result);
    return result;
  }

  public class DeleteCustomer extends CustomerapiRequest<Void> {

    private static final String REST_PATH = "customer/{no}";

    /**
     * Create a request for the method "deleteCustomer".
     *
     * This request holds the parameters needed by the the customerapi server.  After setting any
     * optional parameters, call the {@link DeleteCustomer#execute()} method to invoke the remote
     * operation. <p> {@link DeleteCustomer#initialize(com.google.api.client.googleapis.services.Abstr
     * actGoogleClientRequest)} must be called to initialize this instance immediately after invoking
     * the constructor. </p>
     *
     * @param no
     * @since 1.13
     */
    protected DeleteCustomer(java.lang.String no) {
      super(Customerapi.this, "DELETE", REST_PATH, null, Void.class);
      this.no = com.google.api.client.util.Preconditions.checkNotNull(no, "Required parameter no must be specified.");
    }

    @Override
    public DeleteCustomer setAlt(java.lang.String alt) {
      return (DeleteCustomer) super.setAlt(alt);
    }

    @Override
    public DeleteCustomer setFields(java.lang.String fields) {
      return (DeleteCustomer) super.setFields(fields);
    }

    @Override
    public DeleteCustomer setKey(java.lang.String key) {
      return (DeleteCustomer) super.setKey(key);
    }

    @Override
    public DeleteCustomer setOauthToken(java.lang.String oauthToken) {
      return (DeleteCustomer) super.setOauthToken(oauthToken);
    }

    @Override
    public DeleteCustomer setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (DeleteCustomer) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public DeleteCustomer setQuotaUser(java.lang.String quotaUser) {
      return (DeleteCustomer) super.setQuotaUser(quotaUser);
    }

    @Override
    public DeleteCustomer setUserIp(java.lang.String userIp) {
      return (DeleteCustomer) super.setUserIp(userIp);
    }

    @com.google.api.client.util.Key
    private java.lang.String no;

    /**

     */
    public java.lang.String getNo() {
      return no;
    }

    public DeleteCustomer setNo(java.lang.String no) {
      this.no = no;
      return this;
    }

    @Override
    public DeleteCustomer set(String parameterName, Object value) {
      return (DeleteCustomer) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "getCustomer".
   *
   * This request holds the parameters needed by the customerapi server.  After setting any optional
   * parameters, call the {@link GetCustomer#execute()} method to invoke the remote operation.
   *
   * @param no
   * @return the request
   */
  public GetCustomer getCustomer(java.lang.String no) throws java.io.IOException {
    GetCustomer result = new GetCustomer(no);
    initialize(result);
    return result;
  }

  public class GetCustomer extends CustomerapiRequest<com.appspot.btp_app.customerapi.model.Customer> {

    private static final String REST_PATH = "customer/{no}";

    /**
     * Create a request for the method "getCustomer".
     *
     * This request holds the parameters needed by the the customerapi server.  After setting any
     * optional parameters, call the {@link GetCustomer#execute()} method to invoke the remote
     * operation. <p> {@link
     * GetCustomer#initialize(com.google.api.client.googleapis.services.AbstractGoogleClientRequest)}
     * must be called to initialize this instance immediately after invoking the constructor. </p>
     *
     * @param no
     * @since 1.13
     */
    protected GetCustomer(java.lang.String no) {
      super(Customerapi.this, "GET", REST_PATH, null, com.appspot.btp_app.customerapi.model.Customer.class);
      this.no = com.google.api.client.util.Preconditions.checkNotNull(no, "Required parameter no must be specified.");
    }

    @Override
    public com.google.api.client.http.HttpResponse executeUsingHead() throws java.io.IOException {
      return super.executeUsingHead();
    }

    @Override
    public com.google.api.client.http.HttpRequest buildHttpRequestUsingHead() throws java.io.IOException {
      return super.buildHttpRequestUsingHead();
    }

    @Override
    public GetCustomer setAlt(java.lang.String alt) {
      return (GetCustomer) super.setAlt(alt);
    }

    @Override
    public GetCustomer setFields(java.lang.String fields) {
      return (GetCustomer) super.setFields(fields);
    }

    @Override
    public GetCustomer setKey(java.lang.String key) {
      return (GetCustomer) super.setKey(key);
    }

    @Override
    public GetCustomer setOauthToken(java.lang.String oauthToken) {
      return (GetCustomer) super.setOauthToken(oauthToken);
    }

    @Override
    public GetCustomer setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (GetCustomer) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public GetCustomer setQuotaUser(java.lang.String quotaUser) {
      return (GetCustomer) super.setQuotaUser(quotaUser);
    }

    @Override
    public GetCustomer setUserIp(java.lang.String userIp) {
      return (GetCustomer) super.setUserIp(userIp);
    }

    @com.google.api.client.util.Key
    private java.lang.String no;

    /**

     */
    public java.lang.String getNo() {
      return no;
    }

    public GetCustomer setNo(java.lang.String no) {
      this.no = no;
      return this;
    }

    @Override
    public GetCustomer set(String parameterName, Object value) {
      return (GetCustomer) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "insertCustomer".
   *
   * This request holds the parameters needed by the customerapi server.  After setting any optional
   * parameters, call the {@link InsertCustomer#execute()} method to invoke the remote operation.
   *
   * @param content the {@link com.appspot.btp_app.customerapi.model.Customer}
   * @return the request
   */
  public InsertCustomer insertCustomer(com.appspot.btp_app.customerapi.model.Customer content) throws java.io.IOException {
    InsertCustomer result = new InsertCustomer(content);
    initialize(result);
    return result;
  }

  public class InsertCustomer extends CustomerapiRequest<com.appspot.btp_app.customerapi.model.Customer> {

    private static final String REST_PATH = "customer";

    /**
     * Create a request for the method "insertCustomer".
     *
     * This request holds the parameters needed by the the customerapi server.  After setting any
     * optional parameters, call the {@link InsertCustomer#execute()} method to invoke the remote
     * operation. <p> {@link InsertCustomer#initialize(com.google.api.client.googleapis.services.Abstr
     * actGoogleClientRequest)} must be called to initialize this instance immediately after invoking
     * the constructor. </p>
     *
     * @param content the {@link com.appspot.btp_app.customerapi.model.Customer}
     * @since 1.13
     */
    protected InsertCustomer(com.appspot.btp_app.customerapi.model.Customer content) {
      super(Customerapi.this, "POST", REST_PATH, content, com.appspot.btp_app.customerapi.model.Customer.class);
    }

    @Override
    public InsertCustomer setAlt(java.lang.String alt) {
      return (InsertCustomer) super.setAlt(alt);
    }

    @Override
    public InsertCustomer setFields(java.lang.String fields) {
      return (InsertCustomer) super.setFields(fields);
    }

    @Override
    public InsertCustomer setKey(java.lang.String key) {
      return (InsertCustomer) super.setKey(key);
    }

    @Override
    public InsertCustomer setOauthToken(java.lang.String oauthToken) {
      return (InsertCustomer) super.setOauthToken(oauthToken);
    }

    @Override
    public InsertCustomer setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (InsertCustomer) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public InsertCustomer setQuotaUser(java.lang.String quotaUser) {
      return (InsertCustomer) super.setQuotaUser(quotaUser);
    }

    @Override
    public InsertCustomer setUserIp(java.lang.String userIp) {
      return (InsertCustomer) super.setUserIp(userIp);
    }

    @Override
    public InsertCustomer set(String parameterName, Object value) {
      return (InsertCustomer) super.set(parameterName, value);
    }
  }

  /**
   * Create a request for the method "updateCustomer".
   *
   * This request holds the parameters needed by the customerapi server.  After setting any optional
   * parameters, call the {@link UpdateCustomer#execute()} method to invoke the remote operation.
   *
   * @param content the {@link com.appspot.btp_app.customerapi.model.Customer}
   * @return the request
   */
  public UpdateCustomer updateCustomer(com.appspot.btp_app.customerapi.model.Customer content) throws java.io.IOException {
    UpdateCustomer result = new UpdateCustomer(content);
    initialize(result);
    return result;
  }

  public class UpdateCustomer extends CustomerapiRequest<com.appspot.btp_app.customerapi.model.Customer> {

    private static final String REST_PATH = "customer";

    /**
     * Create a request for the method "updateCustomer".
     *
     * This request holds the parameters needed by the the customerapi server.  After setting any
     * optional parameters, call the {@link UpdateCustomer#execute()} method to invoke the remote
     * operation. <p> {@link UpdateCustomer#initialize(com.google.api.client.googleapis.services.Abstr
     * actGoogleClientRequest)} must be called to initialize this instance immediately after invoking
     * the constructor. </p>
     *
     * @param content the {@link com.appspot.btp_app.customerapi.model.Customer}
     * @since 1.13
     */
    protected UpdateCustomer(com.appspot.btp_app.customerapi.model.Customer content) {
      super(Customerapi.this, "PUT", REST_PATH, content, com.appspot.btp_app.customerapi.model.Customer.class);
    }

    @Override
    public UpdateCustomer setAlt(java.lang.String alt) {
      return (UpdateCustomer) super.setAlt(alt);
    }

    @Override
    public UpdateCustomer setFields(java.lang.String fields) {
      return (UpdateCustomer) super.setFields(fields);
    }

    @Override
    public UpdateCustomer setKey(java.lang.String key) {
      return (UpdateCustomer) super.setKey(key);
    }

    @Override
    public UpdateCustomer setOauthToken(java.lang.String oauthToken) {
      return (UpdateCustomer) super.setOauthToken(oauthToken);
    }

    @Override
    public UpdateCustomer setPrettyPrint(java.lang.Boolean prettyPrint) {
      return (UpdateCustomer) super.setPrettyPrint(prettyPrint);
    }

    @Override
    public UpdateCustomer setQuotaUser(java.lang.String quotaUser) {
      return (UpdateCustomer) super.setQuotaUser(quotaUser);
    }

    @Override
    public UpdateCustomer setUserIp(java.lang.String userIp) {
      return (UpdateCustomer) super.setUserIp(userIp);
    }

    @Override
    public UpdateCustomer set(String parameterName, Object value) {
      return (UpdateCustomer) super.set(parameterName, value);
    }
  }

  /**
   * Builder for {@link Customerapi}.
   *
   * <p>
   * Implementation is not thread-safe.
   * </p>
   *
   * @since 1.3.0
   */
  public static final class Builder extends com.google.api.client.googleapis.services.json.AbstractGoogleJsonClient.Builder {

    /**
     * Returns an instance of a new builder.
     *
     * @param transport HTTP transport, which should normally be:
     *        <ul>
     *        <li>Google App Engine:
     *        {@code com.google.api.client.extensions.appengine.http.UrlFetchTransport}</li>
     *        <li>Android: {@code newCompatibleTransport} from
     *        {@code com.google.api.client.extensions.android.http.AndroidHttp}</li>
     *        <li>Java: {@link com.google.api.client.googleapis.javanet.GoogleNetHttpTransport#newTrustedTransport()}
     *        </li>
     *        </ul>
     * @param jsonFactory JSON factory, which may be:
     *        <ul>
     *        <li>Jackson: {@code com.google.api.client.json.jackson2.JacksonFactory}</li>
     *        <li>Google GSON: {@code com.google.api.client.json.gson.GsonFactory}</li>
     *        <li>Android Honeycomb or higher:
     *        {@code com.google.api.client.extensions.android.json.AndroidJsonFactory}</li>
     *        </ul>
     * @param httpRequestInitializer HTTP request initializer or {@code null} for none
     * @since 1.7
     */
    public Builder(com.google.api.client.http.HttpTransport transport, com.google.api.client.json.JsonFactory jsonFactory,
        com.google.api.client.http.HttpRequestInitializer httpRequestInitializer) {
      super(
          transport,
          jsonFactory,
          DEFAULT_ROOT_URL,
          DEFAULT_SERVICE_PATH,
          httpRequestInitializer,
          false);
    }

    /** Builds a new instance of {@link Customerapi}. */
    @Override
    public Customerapi build() {
      return new Customerapi(this);
    }

    @Override
    public Builder setRootUrl(String rootUrl) {
      return (Builder) super.setRootUrl(rootUrl);
    }

    @Override
    public Builder setServicePath(String servicePath) {
      return (Builder) super.setServicePath(servicePath);
    }

    @Override
    public Builder setHttpRequestInitializer(com.google.api.client.http.HttpRequestInitializer httpRequestInitializer) {
      return (Builder) super.setHttpRequestInitializer(httpRequestInitializer);
    }

    @Override
    public Builder setApplicationName(String applicationName) {
      return (Builder) super.setApplicationName(applicationName);
    }

    @Override
    public Builder setSuppressPatternChecks(boolean suppressPatternChecks) {
      return (Builder) super.setSuppressPatternChecks(suppressPatternChecks);
    }

    @Override
    public Builder setSuppressRequiredParameterChecks(boolean suppressRequiredParameterChecks) {
      return (Builder) super.setSuppressRequiredParameterChecks(suppressRequiredParameterChecks);
    }

    @Override
    public Builder setSuppressAllChecks(boolean suppressAllChecks) {
      return (Builder) super.setSuppressAllChecks(suppressAllChecks);
    }

    /**
     * Set the {@link CustomerapiRequestInitializer}.
     *
     * @since 1.12
     */
    public Builder setCustomerapiRequestInitializer(
        CustomerapiRequestInitializer customerapiRequestInitializer) {
      return (Builder) super.setGoogleClientRequestInitializer(customerapiRequestInitializer);
    }

    @Override
    public Builder setGoogleClientRequestInitializer(
        com.google.api.client.googleapis.services.GoogleClientRequestInitializer googleClientRequestInitializer) {
      return (Builder) super.setGoogleClientRequestInitializer(googleClientRequestInitializer);
    }
  }
}
